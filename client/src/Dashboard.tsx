
import { Header } from "./Header";
import { DashboardContent } from "./DashboardContent";
import { NavigationPanel } from "./NavigationPanel";

export const Dashboard = () => {
    return (
        <div className="container">
            <NavigationPanel />

            <div className="content-container">
                <Header />
                <DashboardContent />
            </div>

        </div>
    );
}
