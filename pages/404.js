import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="pageNotFound">
        <Image
          src="https://www.singlegrain.com/wp-content/uploads/2015/06/eric7.png"
          alt="404 page not found"
          layout="fill"
        />
      </div>
    </>
  );
}
