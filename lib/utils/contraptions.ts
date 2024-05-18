import sql from 'better-sqlite3'
import { ContraptionProps } from "@/lib/types/contraptionTypes";

const db = sql('contraptions.db');

export async function getAllContraptions(): Promise<ContraptionProps[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow network
    return db.prepare('SELECT * FROM contraptions').all() as ContraptionProps[];
}

export function getContraptions(amount: number){
    return db.prepare(`SELECT * FROM contraptions LIMIT ${amount}`).all() as ContraptionProps[];
}