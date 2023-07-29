import { query } from "./../lib/database"
//TODO: イベントポイント
export async function addEventPoint(userId: number, basePoint: number, randomPoint: number) {
	try {
		let addAmount = basePoint + Math.floor(Math.random() * randomPoint);
		let user = await query("SELECT * FROM EventPoint WHERE id = ?;", [userId]);
		console.log(user);
		if (user.length <= 0) {
			let result = await query("INSERT INTO EventPoint VALUES(?,?);", [userId, addAmount]);
			console.log(1);
		}
		else {
			let result = await query("UPDATE EventPoint SET point = point + ? WHERE id = ?;", [addAmount, userId]);
			console.log(2);
		}
		return [addAmount];
	}
	catch (ex) {
		console.log(ex);
	}
}