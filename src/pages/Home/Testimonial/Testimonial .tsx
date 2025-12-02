import reviews from "../../../assets/data/reviews.json";

const Testimonial = () => {
  return (
    <div className="p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 leading-tight!">
          What our happy client say
        </h2>
        <p className="text-[15px] mt-6 leading-relaxed text-slate-600">
          See what our happy clients have to say. They’ve shared how our
          templates helped them launch quickly, look professional, and grow with
          ease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 max-w-6xl max-lg:max-w-3xl max-md:max-w-md mx-auto mt-24">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-full p-6 rounded-md mx-auto shadow-md border border-gray-200 bg-white relative">
            <div className="w-[76px] h-[76px] rounded-full overflow-hidden absolute right-0 left-0 mx-auto -top-10 border-2 border-black">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-full h-full"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-[15px] text-slate-700 font-normal leading-relaxed">
                {review.review}
              </p>
            </div>

            <div className="mt-4 text-center">
              <h4 className="text-slate-900 text-[15px] whitespace-nowrap font-semibold">
                {review.name}
              </h4>
              <h4 className=" font-medium">{review.product}</h4>
            </div>
            <div className="text-yellow-500 font-bold">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
