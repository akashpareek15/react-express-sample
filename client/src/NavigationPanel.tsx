import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const NavigationPanel = ({ }) => {
    return (
        <div className='nav-panel'>
            <List disablePadding>
                {[...Array(10).keys()].map((text) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton>
                            <ListItemText primary={`Criteria ${text + 1}`} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}