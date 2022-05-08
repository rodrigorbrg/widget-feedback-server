-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screeshot" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "feedbacks_id_key" ON "feedbacks"("id");
