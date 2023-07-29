import { query } from "./../lib/database"

export async function ranking(req: any, res: any, route: any) {
    let ranking = await query("SELECT u.name, e.point FROM EventPoint e INNER JOIN User u ON e.id = u.id ORDER BY e.point DESC;", []);
    console.log(ranking);
    return {
        status: 200,
        ranking: ranking
    };
}