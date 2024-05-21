import style from './wave-background.module.css';

export default function WaveBackground() {
  return (
    <div className={`${style.waveContainer}`}>
      <div className={`${style.ocean}`}>
        <div className={`${style.wave}`}></div>
        <div className={`${style.wave}`}></div>
      </div>
    </div>
  )
}