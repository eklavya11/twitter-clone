import jwt from "jsonwebtoken";

export default function (data: { _id: string }, expires: number): string {
  const secret = String(process.env.JWT_SECRET);

  return jwt.sign(data, secret, { expiresIn: expires });
}
