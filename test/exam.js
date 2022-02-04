import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://jsonplaceholder.typicode.com/');

describe('Exam Get and Post', () => {
    it('GET /todos', () => {
        return request.get('todos/1').then((res) => {
             expect(res.body.id).to.be.eq(1);
             expect(res.statusCode).to.be.eq(200);
         });
    });

    it('GET /post/a', () => {
        return request.get('posts/a').expect(404);
    });

    it('GET posts/1/comments', () => {
        return request.get('posts/1/comments').then((res) => {
            res.body.forEach(data => {
              expect(res.body[1].name).to.be.eq('quo vero reiciendis velit similique earum');
              expect(res.body[1].email).to.be.eq('Jayne_Kuhic@sydney.com');
            })
        });
    });
});