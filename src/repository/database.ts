
export interface FeedbackModel {
  type: string;
  comment: string;
  screenshot?: string;
}

export default interface Database {
  createFeedback: (feedback: FeedbackModel) => Promise<void>
}