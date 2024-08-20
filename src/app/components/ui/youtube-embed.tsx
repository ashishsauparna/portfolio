interface Props {
    videoId: string;
}

const YouTubeEmbed = ({videoId}: Props) => {
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          style={{ width: '450px', height: '292px' }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      </div>
    ); 
  };

  export default YouTubeEmbed;