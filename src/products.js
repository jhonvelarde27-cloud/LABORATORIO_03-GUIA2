// products.js
// Módulo de gestión de productos (VERSIÓN CORREGIDA - HagenDev)

const products = [
    { id: 1, name: 'Laptop HP', price: 2500 },
    { id: 2, name: 'Mouse Logitech', price: 45 },
    { id: 3, name: 'Teclado Mecánico', price: 120 },
    { id: 4, name: 'Monitor LG', price: 850 }
];

/**
 * Busca un producto por su ID de manera estricta.
 * @param {number} id Identificador del producto
 * @returns {object|null} El producto encontrado o null si no existe
 */
function getProductById(id) {
    return products.find(p => p.id === id) ?? null;
}

/**
 * Calcula el precio final aplicando un descuento.
 * @param {object} product Objeto del producto
 * @param {number} discount Valor del descuento (0 a 1)
 * @returns {number} Precio con descuento aplicado
 */
function calculateDiscount(product, discount) {
    if (!product || product.price === null || product.price < 0) {
        throw new Error('El producto tiene un precio inválido para el cálculo.');
    }
    const finalPrice = product.price - (product.price * discount);
    return finalPrice;
}

/**
 * Filtra los productos que superan un precio mínimo.
 * @param {number} minPrice Umbral de precio
 * @returns {Array} Lista de productos filtrados
 */
function filterExpensive(minPrice) {
    return products.filter(p => p.price > minPrice);
}

module.exports = { getProductById, calculateDiscount, filterExpensive };