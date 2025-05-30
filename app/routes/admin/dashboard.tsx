import {Header, ParkingCard, StatsCard} from "../../../components";
import {dashboardStats,user,allParkings} from "~/constants";
const {totalUsers,usersJoined,totalParkings,parkingsCreated,userRole}=dashboardStats;
const Dashboard = () => {

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'}👋`}
                description="Track your parkings, safe and popular locations in real Time"
            />
            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Parkings"
                        total={totalParkings}
                        currentMonthCount={parkingsCreated.currentMonth}
                        lastMonthCount={parkingsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>
            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100">Available Parking Regions</h1>
                <div className="trup-grid">
                    {allParkings.slice(0,4).map(({id,name,imageUrls,itinerary,tags,estimatedPrice})=>(
                        <ParkingCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrl={imageUrls[0]}
                            location={itinerary?.[0]?.location ?? ''}
                            tags={tags}
                            price={estimatedPrice}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Dashboard;
