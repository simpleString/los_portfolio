import { CardActionArea, CardContent } from '@mui/material';
import CardText from './Styled/CardText';
import StyledCard from './Styled/StyledCard';
import StyledCardMedia from './Styled/StyledCardMedia';
import { BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
interface ICardItemProps {
  image: string;
  text: string;
  url: string;
  baseUrl: 'posts' | 'games';
}

const CardItem = ({ url, image, text, baseUrl }: ICardItemProps) => {
  console.log(url);
  return (
    <StyledCard variant={'outlined'}>
      {/*<Link to={`/${baseUrl}/${url}`}>*/}
      <CardActionArea>
        <StyledCardMedia
          component={'img'}
          image={`${BASE_URL}${baseUrl}/${image}`}
          height={'200px'}
          width={'100%'}
        />
        <CardContent>
          <CardText>
            <Typography component={Link} to={`/${baseUrl}/${url}`}>
              {text}
            </Typography>
          </CardText>
        </CardContent>
      </CardActionArea>
      {/*</Link>*/}
    </StyledCard>
  );
};

export default CardItem;
