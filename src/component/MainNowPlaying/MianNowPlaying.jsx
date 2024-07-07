import coverImg from '../../assets/playing-cover-example.jpg'
import unfavorIcon from '../../assets/unfavor-icon.svg'
import stopIcon from '../../assets/stop-playing.svg'
import nowStyle from './MainNowPlaying.module.scss'

export function NowPlayingContainer({ children }) {
  return (
    <section className={nowStyle.nowPlayingContainer}>
      {children}
    </section>
  )
}

export default function MainNowPlaying() {
  return (
    <NowPlayingContainer>
      <div className={nowStyle.titleGroup}>
        <span className={nowStyle.title}>正在播放</span>
        <span className={nowStyle.divider} />
      </div>
      <div className={nowStyle.playingCoverGroup}>
        <img src={coverImg} alt="cover" className={nowStyle.coverImg} />
        <span className={nowStyle.coverName}>
          Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor...
        </span>
      </div>
      <div className={nowStyle.castInfo}>
        <div className={nowStyle.authorInfo}>
          <span className={nowStyle.author}>Seinabo Sey</span>
          <img
            className={nowStyle.unfavorIcon}
            src={unfavorIcon}
            alt="unfavor"
          />
        </div>
        <div className={nowStyle.timeInfo}>
          <span>2023-04-08·1小時20分</span>
        </div>
        <p className={nowStyle.introduce}>
          A Spotify podcast sharing fresh insights on important topics of the
          moment—in a way only Spotify can. You’ll hear from experts in the
          music, podcast and tech industries as we discover and uncover stories
          about our work and the world around us.
        </p>
      </div>
      <div className={nowStyle.playingInfo}>
        <img src={stopIcon} alt="stop-playing" className={nowStyle.stopIcon} />
        <span className={nowStyle.timeLeft}>00:13:16 / 1:20:00</span>
        <span className={nowStyle.timeBar} />
      </div>
    </NowPlayingContainer>
  );
}