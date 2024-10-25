const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";


export const envMode = process.env.NODE_ENV;
export const adminSecretKey = process.env.ADMIN_SECRET_KEY;
export const userSocketIDs = new Set();


export { corsOptions, CHATTU_TOKEN };
