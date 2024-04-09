import { Instagram, Telegram, X } from '@mui/icons-material';
import cat1 from '../assets/mielikki.png';
import cat2 from '../assets/2.jpg';
import cat3 from '../assets/3.jpg';
import './content.css';
import { Link } from '@mui/material';

export const Content = () => {
  return (
    <section className='content'>
      <div className='content-row main-row'>
        <img src={cat1} alt='Mielikki' className='cat' />
        <div className='row-section'>
          <p className='intro reddit-mono'>
            Introducing Rescue Cat ($RESCUE) – your next favorite memecoin with
            a heart of gold and a story that warms even the coldest of hearts.
            Inspired by Mielikki, a charismatic Finnish rescue cat adorned with
            a unique Christmas tree-shaped mark, $RESCUE is here to make waves
            in the crypto world.
          </p>
          <div className='socials'>
            {/* <Link href='https://raydium.io/swap/?outputCurrency=4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'>
              <div className='link reddit-mono'>Buy $RESCUE</div>
            </Link> */}
            <Link className='link-icon tg' href='https://t.me/rescuecatonsol'>
              <Telegram
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
            <Link className='link-icon x' href='https://x.com/rescuecatonsol'>
              <X
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
            <Link
              className='link-icon instagram'
              href='https://instagram.com/mielikkissa'
            >
              <Instagram
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='content-row main-row'>
        <div className='row-section'>
          <p className='intro reddit-mono'>
            Here's the twist: we've earmarked a generous portion of the total
            $RESCUE supply directly for animal shelters. Our approach involves
            setting ambitious market cap milestones. Upon reaching these
            targets, we'll DCA sell a fraction of this fund, translating our
            community's growth directly into charitable donations.
          </p>
          <p className='intro reddit-mono'>
            This model incentivizes holders to keep their paws on their $RESCUE,
            driving us toward our goals together. It's a win-win: as the value
            of $RESCUE climbs, so does our collective impact on animal welfare.
          </p>
        </div>
      </div>
      <div className='content-row main-row'>
        <img src={cat3} alt='Mielikki' className='cat' />
        <div className='row-section'>
          <h3 className='reddit-mono'>Milestones</h3>
          <ul className='reddit-mono'>
            <li>500k</li>
            <li>1m</li>
            <li>2.5m</li>
            <li>5m</li>
            <li>10m</li>
            <li>25m</li>
            <li>50m</li>
            <li>100m</li>
            <li>250m</li>
            <li>500m</li>
          </ul>
        </div>
      </div>

      <div className='content-row main-row'>
        <div className='row-section'>
          <p className='intro reddit-mono'>
            We're not just launching a coin; we're starting a movement. A
            movement where every holder isn't just investing in a token, but in
            the future and well-being of animals across the globe.
          </p>
          <p className='intro reddit-mono'>
            Grab your $RESCUE, spread the word, and let's embark on this journey
            together. Be part of a community that values fun, financial freedom,
            and philanthropy all in one place.
          </p>
          <p className='intro reddit-mono'>
            Join us now, and let's make history.
          </p>
        </div>
      </div>
      <div className='content-row main-row'>
        <img src={cat2} alt='Mielikki' className='cat' />
        <div className='row-section'>
          <h3 className='reddit-mono'>Tokenomics</h3>
          <ul className='reddit-mono'>
            <li>5% for charity.</li>
            <li>4% for marketing.</li>
            <li>1% for luxury kibble.</li>
          </ul>
        </div>
      </div>
      <div className='content-row main-row'>
        <div className='row-section'>
          <p className='intro reddit-mono'>
            $RESCUE isn't just about the memes or the money; it's about making a
            tangible difference in the lives of animals in need.
          </p>
        </div>
      </div>
      <div className='content-row brick-row'>
        <p className='reddit-mono'>
          Launched fairly on <a href='https://pump.fun'> pump.fun</a>.
        </p>
        {/* <Link
          color='primary'
          underline='hover'
          sx={{ fontSize: '1.5em' }}
          href='https://dexscreener.com/solana/4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'
        >
          <p className='ca reddit-mono'>4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr</p>
        </Link> */}
      </div>
    </section>
  );
};
