const cluster = require('cluster');
const redis = require("ioredis");
const RateLimiter = require('rate-limiter-flexible');
const Bull = require('bullmq');
const app = require('./app.js'); 
require('dotenv').config();

if (cluster.isWorker) {
  const redisClient = redis(process.env.REDIS_URL);

  const rateLimiter = new RateLimiter({
    store: redisClient,
    keyPrefix: 'user_task_limit',
    points: 1, // Allow 1 task per second
    duration: 1000, // Per second window
  });

  const queueName = (userId) => `user_tasks_${userId}`;

  const processTask = async (userId) => {
    const success = await rateLimiter.consume(userId);
    if (success) {
      //  Simulate task execution (replace with actual logic)
      await task(userId);
      // Push task completion information to a separate queue for processing
      
      const logQueue = new Bull('task_logs');
      await logQueue.add({ userId, timestamp: Date.now() });
    } else {
      console.log(`Rate limit exceeded for user ${userId}`);
      // Add task to user-specific queue for processing later
      const taskQueue = new Bull(queueName(userId));
      await taskQueue.add({ userId });
    }
  };

  // Handle incoming requests


  app.post('/api/v1/task', async (req, res) => {
    const { user_id } = req.body;
    try {
      await processTask(user_id);
      res.json({ message: 'Task queued successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.listen(process.env.PORT, () => {
    console.log(`Worker ${cluster.worker.id} listening on port ${process.env.PORT}`);
  });
}