export default function GiftList({ gif, key }) {
    console.log({ gif });
    return (
      <div>
        <ul style={{listStyle:"none"}}>
          <li key={key}>
            <img src={gif.images.original.url} alt="gifs" />
          </li>
        </ul>
      </div>
    );
  }