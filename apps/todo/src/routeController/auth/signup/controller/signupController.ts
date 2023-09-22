import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function signupPost(req: Request, res: Response) {
  try{
  const { username, password ,email} = req.body;

  // Check if the user already exists
  const existingUser = await prisma.user.findFirst({
    where: {
      username:username
    },
  });

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create the user in the database
  const newUser = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
    },
  });

  res.status(201).json({ message: 'User created successfully', user: newUser });
}catch (error) {
  console.error('Error occurred during signup:', error);
  res.status(500).json({ message: 'An error occurred during signup' });
}
}