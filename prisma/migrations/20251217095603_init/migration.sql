-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR,
    "description" VARCHAR,
    "created_at" DATE,
    "update_id" DATE,
    "completed" BOOLEAN,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" VARCHAR,
    "hashed_password" VARCHAR,
    "created_at" DATE,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "user_id" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
