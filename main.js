
async function getData(){
	
	try{
		const response = await fetch('https://dummyjson.com/products');
		const data = response.json();
		return data;
		
	}catch(er){
		console.error("Erro ao consultar API", er);
		throw er;
	}
		
}


async function createDatas(){
	try{
		const datas = await getData();
		
		//meu codigo nao estava indo pq estava acessando somente o datas
		//nao encontrava a estrutura
		if(datas && datas.products){

			const productContainer = document.querySelector('#products-container');

			datas.products.forEach(element => {				
				console.log(element);
				
				const div = document.createElement('div');
				const brand = document.createElement('h3');
				const image = document.createElement('img');
				const price = document.createElement('h4');
				const btnCart = document.createElement('button');
				const divider = document.createElement('hr');

				div.classList = 'card';
				brand.classList = 'brand';
				image.classList = 'image';
				price.classList = 'price';
				btnCart.classList = 'btn-cart';
				divider.classList = 'divider'
				

				brand.innerHTML = `Marca: ${element.brand}`;
				image.src = element.thumbnail;
				
				price.innerHTML = `R$ ${element.price},00`;
				btnCart.innerHTML = 'Add to cart';

				div.appendChild(image);
				div.appendChild(brand);
				div.appendChild(divider)
				div.appendChild(price);
				
				div.appendChild(btnCart);

				productContainer.appendChild(div)

        	});
				
		}	
		else{
            console.error("Dados inválidos ou ausentes.");
		}
        
    } catch (err) {
        console.error("Erro ao criar dados", err);
    }
}

createDatas();
