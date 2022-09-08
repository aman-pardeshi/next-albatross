import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className='rounded border-2 py-2 px-2'>
      <Link href={`/product/${product._id}`}>
        <Image
          src={product.image}
          width={350}
          height={250}
          className='cursor-pointer'
        />
      </Link>

      <Link href={`/product/${product._id}`}>
        <strong className='cursor-pointer'>{product.name}</strong>
      </Link>

      <div>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </div>

      <div className='text-2xl'>${product.price}</div>
    </div>
  );
};

export default Product;
