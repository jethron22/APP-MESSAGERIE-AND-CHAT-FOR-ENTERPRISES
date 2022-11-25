import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Home from './Home';
import './UsersSidebar.css'
import CardUser from './CardUser';
import { FaCentercode } from 'react-icons/fa';
import { Box } from '@mui/system';

export default function CardMessage() {
	return (
		<div style={{ margin: 100,

    }}>
		<Box>
			<Card raised={true} sx={{ bgcolor: "#E8E8E8" }} >
      <h1>Tous les utilisateurs</h1>


				<CardContent>   
          <div>
					<h3>hhh</h3>
          <div className='cardUser'>
            <CardUser />
          </div>
          </div>
				</CardContent>
				<CardActions >
				</CardActions>
			</Card>
			</Box>
		</div>
	);
}
