import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { TiArrowSortedDown } from 'react-icons/ti';

const Comments = ({ data }) => {

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data.commentsCount} Yorum</h2>
      <input
        className="w-full bg-transparent border-b p-2 outline-none mb-5"
        placeholder="Yorum ekleyiniz"
        type="text"
      />

      {data.data.map((i) => (
        <div className="flex gap-2 items-start px-1 py-4">
          <img
            className="rounded-full"
            src={i.authorThumbnail[0].url}
            alt="logo"
          />

          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="text-semibold">{i.authorText}</span>
              <span className="text-sm text-gray-400">
                {i.publishedTimeText}
              </span>
            </h5>

            <p>{i.textDisplay}</p>

            <div className="flex gap-5 items-center">
              <div className="flex gap-1 hover:bg-gray-700 p-1 rounded cursor-pointer">
                <AiFillLike />
                <span className="text-sm text-gray-400">{i.likesCount}</span>
              </div>

              <div className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                <AiFillDislike />
              </div>

              <span className="hover:bg-gray-700 p-1 rounded cursor-pointer">
                {' '}
                Yanıtla
              </span>
            </div>

            {i.replyCount > 0 && (
              <div className="flex w-fit items-center p-1 rounded-md gap-2 text-blue-500 hover:bg-[#36639662] cursor-pointer">
                <TiArrowSortedDown />
                {i.replyCount} yanıt
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;