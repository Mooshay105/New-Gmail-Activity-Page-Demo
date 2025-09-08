import { useEffect } from "react";
import NavBar from "./NavBar";
import activityData from "./assets/activity.json";

function isOdd(num: number): boolean {
	return num % 2 !== 0;
}

export default function App() {
	useEffect(() => {
		alert(
			'WARNING: This is a demo and not the real Gmail activity page. The data is fake and does not represent real data. To get your real activity data, Open Gmail and in the bottom right corner, it will say "Last account activity: X hours ago \n Details". Then click on the details button.',
		);
	}, []);

	return (
		<div>
			<NavBar />
			<div className="mx-2.5">
				<p>
					Your IP is {activityData.ip}. ({activityData.location})
				</p>
				<p>
					<span className="text-red-700">*</span> Your current session.
				</p>
				<div className="overflow-scroll rounded-2xl border-none">
					<table className="min-w-full bg-white border border-gray-200">
						<thead>
							<tr className="bg-(--light-gray) text-left">
								<th className="py-2 px-4 border-b text-left">IP</th>
								<th className="py-2 px-4 border-b text-left">Time Ago</th>
								<th className="py-2 px-4 border-b text-left">Location</th>
								<th className="py-2 px-4 border-b text-left">Device OS</th>
								<th className="py-2 px-4 border-b text-left">Device Browser</th>
								<th className="py-2 px-4 border-b text-left">Device Type</th>
							</tr>
						</thead>
						<tbody>
							{activityData.activity.map((activity) => (
								<tr
									key={activity.ip}
									className={isOdd(activity.id) ? "bg-white" : "bg-(--off-white)"}
								>
									<td className="py-2 px-4 border-b">
										{activity.ip}
										<span className="text-red-700">
											{activity.isCurrentSession ? "*" : ""}
										</span>
									</td>
									<td className="py-2 px-4 border-b">{activity.timeAgo}</td>
									<td className="py-2 px-4 border-b">{activity.location}</td>
									<td className="py-2 px-4 border-b">{activity.deviceOS}</td>
									<td className="py-2 px-4 border-b">{activity.deviceBrowser}</td>
									<td className="py-2 px-4 border-b">{activity.deviceType}</td>
								</tr>
							))}
							{/* Add more rows as needed */}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
