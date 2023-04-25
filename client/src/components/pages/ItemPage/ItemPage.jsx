const ItemPage = () => {
     async function data() {
          const data = await fetch(`http://localhost:8080/api/tea`);
          return data;
     }
     const result = data().then((data) => data.json());
     result.then((data) => console.log(data));
     return <h1>item</h1>;
};

export default ItemPage;
