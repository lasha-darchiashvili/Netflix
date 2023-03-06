import ModalMui from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { FaPlay } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { VscMute } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";

const Modal = () => {
  const { showModal, setShowModal, chosenMovie } = useContext(ModalContext);
  const [trailer, setTrailer] = useState();
  const [genres, setGenres] = useState();
  const [muted, setMuted] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${
        chosenMovie?.hasOwnProperty("video") ? "movie" : "tv"
      }/${
        chosenMovie?.id
      }?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => {
        const trailerKey = data?.videos.results.find(
          (el) => el.type === "Trailer"
        ).key;
        setTrailer(trailerKey);
        setGenres(data.genres);
      })
      .catch((error) => console.error(error));
  }, [chosenMovie]);

  const opts = {
    height: "390",
    width: "640",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <ModalMui
      open={showModal}
      onClose={handleClose}
      className=" max-w-[1000px]  mx-auto absolute mt-[3rem] rounded-xl overflow-y-scroll scrollbar-hide"
    >
      <>
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 z-[1000] bg-[#181818] flex w-[40px] h-[40px] items-center justify-center rounded-full transition"
        >
          <MdOutlineClose size="30px" color="white" />
        </button>
        <div className=" w-100% h-auto pt-[56.25%] relative rounded-xl flex justify-center">
          <iframe
            className=" mx-auto overflow-hidden w-[100%] h-full absolute top-0 left-0 rounded-t-xl"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${trailer}?autoplay=1&mute=${
              muted ? "0" : 1
            }&controls=0`}
            width="100%"
            height="100%"
            style={{ objectFit: "fill" }}
          ></iframe>

          <div className="absolute bottom-[4rem] flex items-center justify-between w-[90%]">
            <div className="flex gap-[1rem]">
              <button className=" gap-[1rem] flex items-center rounded-lg xs:bg-white bg-[#2a2a2a]/60 xs:border-none border-2 border-[gray] px-[4rem]  font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="xs:h-[3rem] xs:w-[3rem] text-white xs:text-black" />
                <p className="text-[1.6rem] text-white xs:text-black font-normal xs:font-bold">
                  Play
                </p>
              </button>
              <button className=" xs:py-[1rem] xs:px-[1rem] py-[0.5rem] px-[0.5rem] flex  items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10">
                <AiOutlinePlus
                  className="xs:h-[3rem] xs:w-[3rem] h-[2rem] w-[2rem]"
                  color="white"
                />
              </button>
              <button className=" xs:py-[1rem] xs:px-[1rem] py-[0.5rem] px-[0.5rem] flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10">
                <AiOutlineLike
                  className="xs:h-[3rem] xs:w-[3rem] h-[2rem] w-[2rem]"
                  color="white"
                />
              </button>
            </div>
            <div>
              {!muted ? (
                <button
                  onClick={() => setMuted(true)}
                  className=" xs:py-[1rem] xs:px-[1rem] py-[0.5rem] px-[0.5rem] flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10"
                >
                  <VscMute
                    className="xs:h-[3rem] xs:w-[3rem] h-[2rem] w-[2rem]"
                    color="white"
                  />
                </button>
              ) : (
                <button
                  onClick={() => setMuted(false)}
                  className=" xs:py-[1rem] xs:px-[1rem] py-[0.5rem] px-[0.5rem] flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10"
                >
                  <VscUnmute
                    className="xs:h-[3rem] xs:w-[3rem] h-[2rem] w-[2rem]"
                    color="white"
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-white px-[3rem] py-[3rem] bg-[#181818] rounded-b-xl font-nunito">
          <div className="text-[1.5rem] flex gap-[1rem]  items-center flex-row  ">
            <p className="text-green-400 font-semibold ">
              {chosenMovie?.vote_average.toFixed(1) * 10}% Match
            </p>
            <p className="">
              {chosenMovie?.release_date || chosenMovie?.first_air_date}
            </p>
            <div className="flex rounded h-[16px] text-[1.2rem] items-center justify-center border border-white/40 px-1.5 ">
              HD
            </div>
          </div>

          <div className="mt-[2rem] flex sm:flex-row flex-col gap-[2rem] sm:gap-[10rem] ">
            <div className="text-[1.8rem] font-normal w-5/6">
              <p>{chosenMovie?.overview}</p>
            </div>
            <div className="flex flex-col gap-[1rem] sm:w-1/6 text-[1.4rem]">
              <div>
                <span className="text-graytx">Genres:</span>{" "}
                {genres?.map((genre) => genre.name).join(", ")}
              </div>

              <div>
                <span className="text-graytx">Original language:</span>{" "}
                {chosenMovie?.original_language.toUpperCase()}
              </div>

              <div>
                <span className="text-graytx">Total votes:</span>{" "}
                {chosenMovie?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </>
    </ModalMui>
  );
};

export default Modal;
