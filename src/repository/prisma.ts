import { PrismaClient } from '@prisma/client';
import Database, { FeedbackModel } from './database';

class Prisma implements Database {

  private prisma = new PrismaClient({
    log: ['query']
  });

  async createFeedback(feedback: FeedbackModel) {
    await this.prisma.feedback.create({
      data: { 
        type: feedback.type,
        comment: feedback.comment,
        screeshot: feedback.screenshot,
      }
    });
  };
}

export default Prisma;