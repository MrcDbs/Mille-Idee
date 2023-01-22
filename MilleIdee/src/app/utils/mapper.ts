import { IProdotti } from '../model/prodotti';

export const mapToProduct = (item: any): IProdotti => {
    const prodotto: IProdotti = {
        id: item.id,
        marca: item.marca,
        nome: item.nome,
        descrizione: item.descrizione
    }
    return prodotto;
}