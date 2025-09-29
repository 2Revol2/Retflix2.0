import s from "./MovieInfo.module.css";

interface MovieInfoProps {
  title: string;
  info: string | string[] | number;
}

export const MovieInfo = (props: MovieInfoProps) => {
  const { title, info } = props;
  return (
    <>
      <span className={s.title}>{title}</span>
      {Array.isArray(info) ? (
        <div>
          {info.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : (
        <p>{info}</p>
      )}
    </>
  );
};
