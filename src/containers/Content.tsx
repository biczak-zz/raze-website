import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const getRandomSize = () => Math.floor(Math.random() * 80) + 75;
const Content = () => (
  <Box sx={{ width: '100%', margin: '10px 0' }}>
    <Grid container spacing={2} columns={17}>
      <Grid item xs={5}>
        <Paper elevation={3} sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                height="525"
                image="https://i.imgur.com/sNtp2AA.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Featured Business
                </Typography>
                <Divider sx={{ marginBottom: '10px' }} />
                <Typography variant="h4" color="text.primary">
                  Simone's
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Simone's blah blah blah blah blah blah blah blah blah blah
                  blah blah blah blah blahblah blah blahblah blah blah blah blah
                  blah
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Button variant="contained">Learn More About Simone's</Button>
              </CardActions>
            </Card>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation={3} sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <b>Today's Top Stories</b>
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  height="525"
                  image="https://i.ytimg.com/vi/tFOkzl8iXX0/maxresdefault.jpg"
                  alt="green iguana"
                  sx={{ width: '95%' }}
                />
              </Box>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{
                  paddingTop: '10px',
                  textAlign: 'center',
                  margin: '0 10px',
                  fontSize: '16px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                vel eros donec ac odio tempor orci dapibus ultrices. Fermentum
                posuere urna nec tincidunt praesent semper feugiat nibh. Aliquam
                ut porttitor leo a. Vel pretium lectus quam id leo in vitae
                turpis massa. Quis varius quam quisque id diam vel quam
                elementum pulvinar. Vitae proin sagittis nisl rhoncus mattis
                rhoncus urna. Magna eget est lorem ipsum dolor sit. A erat nam
                at lectus urna duis convallis convallis tellus. Duis convallis
                convallis tellus id interdum velit. Aliquam eleifend mi in nulla
                posuere sollicitudin aliquam. Turpis egestas integer eget
                aliquet nibh praesent. In hac habitasse platea dictumst quisque
                sagittis purus sit. Eu augue ut lectus arcu bibendum at varius
                vel. Sodales ut etiam sit amet nisl purus in. Elementum integer
                enim neque volutpat ac tincidunt vitae semper.
              </Typography>
            </Card>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} sx={{ textAlign: 'center' }}>
          <Box sx={{ width: '100%', height: '90vh' }}>
            <Card sx={{ width: '100%', height: '100%' }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  City Creations
                </Typography>
                <Divider />
              </CardContent>
              <ImageList
                variant="masonry"
                cols={3}
                gap={8}
                sx={{ margin: '0 10px' }}
              >
                {itemData.map((item, idx) => (
                  <ImageListItem key={idx}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}?w=75&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        height: `${getRandomSize()}px`,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Card>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default Content;

const itemData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg',
    title: 'College Dropout',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg',
    title: 'Late Registration',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
    title: 'Graduation',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
    title: '808s & Heartbreak',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg',
    title: 'My Beautiful Dark Twisted Fantasy',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png?1630849164654',
    title: 'Yeezus',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg?1630849134938',
    title: 'The Life of Pablo',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg?1630849205080',
    title: 'Ye',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Kids_See_Ghosts_Cover.png?1630849233890',
    title: 'Kids See Ghosts',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg?1630849256893',
    title: 'Man on the Moon: The End of Day',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Kidcudimanonthemoonthelegendof.jpg?1630849286991',
    title: 'Man on the Moon II: The Legend of Mr. Rager',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/9/97/Man_on_the_Moon_III.jpg?1630849313501',
    title: 'Man on the Moon III: The Chosen',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg',
    title: 'My Beautiful Dark Twisted Fantasy',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg?1630849205080',
    title: 'Ye',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png?1630849164654',
    title: 'Yeezus',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg?1630849134938',
    title: 'The Life of Pablo',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg?1630849205080',
    title: 'Ye',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Kids_See_Ghosts_Cover.png?1630849233890',
    title: 'Kids See Ghosts',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/2/26/ManonTheMoonTheEndofDay.jpg?1630849256893',
    title: 'Man on the Moon: The End of Day',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Kidcudimanonthemoonthelegendof.jpg?1630849286991',
    title: 'Man on the Moon II: The Legend of Mr. Rager',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/9/97/Man_on_the_Moon_III.jpg?1630849313501',
    title: 'Man on the Moon III: The Chosen',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg',
    title: 'My Beautiful Dark Twisted Fantasy',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg?1630849205080',
    title: 'Ye',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
    title: 'Graduation',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
    title: '808s & Heartbreak',
  },

  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
    title: 'Graduation',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
    title: '808s & Heartbreak',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg',
    title: 'College Dropout',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg',
    title: 'Late Registration',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
    title: 'Graduation',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
    title: '808s & Heartbreak',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg',
    title: 'My Beautiful Dark Twisted Fantasy',
  },
];
