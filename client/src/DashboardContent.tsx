import { Box, Card } from "@mui/material"
import { Header } from "./Header"

export const DashboardContent = () => {
    return <>

        <div>Dashboard content here
            {[...Array(10).keys()].map(() => (
                <Card>Summary</Card>
            ))
            }
        </div>

    </>

}