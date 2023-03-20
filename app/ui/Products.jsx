import Card from "./Card";

async function Products() {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "fakeapi", {
    cache: "no-store",
  });
  const datas = await response.json();

  return (
    <section className="top-products">
      <div className="container">
        <div className="top-products__wrapper">
          <a className="top-products__link" href="#">
            Katta sotuvlar
            <svg
              data-v-36c3e0b4=""
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ui-icon title-icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
                fill="black"
              ></path>
            </svg>
          </a>

          <ul className="top-products__list">
            {datas.map((data) => (
              <Card
                title={data.name}
                image={data.image}
                price={data.price}
                rating={data.rating}
                isFav={data.isFavorite}
                id={data.id}
              />
            ))}
          </ul>
          <div className="top-products__addbox">
            <button
              className="top-products__addbtn"
              value="show-other-products"
            >
              Yana ko‘rsatish 20
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
