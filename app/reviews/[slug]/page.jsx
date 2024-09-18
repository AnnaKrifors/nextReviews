import Heading from "../../../components/heading";
import { getReview } from "../../../lib/reviews";
import ShareLinkButton from "../../../components/ShareLinkButton";
//här kan man sätta metadatan dynamiskt
export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);

  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-2 items-baseline">
        <p className="italic pb-2"> {review.date}</p>
        <ShareLinkButton />
      </div>
      <img src={review.image} alt="" width="640" height="360" className="rounded mb-2" />
      <article dangerouslySetInnerHTML={{ __html: review.body }} className="prose max-w-screen-sm prose-slate" />
    </>
  );
}
