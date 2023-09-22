import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.VITE_PB_URL);
pb.autoCancellation(false); //중복된 요청 불필요
