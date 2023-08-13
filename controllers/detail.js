
  function getDetailProduct(id){
    console.log(id)
    var promise = axios({
        method : 'GET',
        url : `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
       });
       promise
       .then(function(rs){
        //nơi xử lí đưa dữ liệu lên giao diện
        //gọi vòng lặp để xử lí render ra giao diện
           arrProduct = rs.data.content;
        //    renderProduct(arrProduct);
        console.log(arrProduct);
        window.location = "./../views/detail.html";
       })
       .catch(function(er){
        console.log(er)
       });
  }