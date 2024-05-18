import sql from 'better-sqlite3'
import { ContraptionProps } from "@/lib/types/contraptionTypes";

const db = sql('contraptions.db');

export async function getContraptions(): Promise<ContraptionProps[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow network
    return db.prepare('SELECT * FROM contraptions').all() as ContraptionProps[];
}