
export interface EmailModel {
  type: string;
  comment: string;
  screenshot: string;
}

export default interface Email {
  sendEmail: (content: EmailModel) => Promise<void>
}