// Buscar os links já salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;

}



// Salvar no localStorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    // Se já tiver um link salvo com ID eu não vou deixar duplicar

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        console.log("Este link já existe na lista");
        return;
    }

    // Adicionar novo link na lista

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("Link salvo com sucesso")

}


// Deletar link já salvo 
export function deleteLink(Links, id) {

    let myLinks = Links.filter( item => {
        return (
            item.id !== id
        )
    } )

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))

    return myLinks;

}