export const OrderService = {
  getOrders: async function () {
    return 'get orders';
  },

  getById: async function (id) {
    return 'get order by id';
  },

  postOrder: async function (name) {
    return 'post order';
  },

  updateOrder: async function (name, id) {
    return 'update order';
  },

  deleteOrder: async function () {
    return 'delete order';
  },
}