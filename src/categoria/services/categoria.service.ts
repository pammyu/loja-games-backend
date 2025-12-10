
import { ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeleteResult } from "typeorm/browser";


export class CategoriaService {
    constructor(

        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: {
                produtos: true
            }
        });
    }

    async findById(id: number): Promise<Categoria> {

        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                produtos: true
            }
        });

        if(!categoria)
            throw new HttpException("Categoria não encontrada!", HttpStatus.NOT_FOUND);

        return categoria;
    }

    async findAllByDescricao(descricao: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                produtos: true
            }
        });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        await this.findById(categoria.id);

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.categoriaRepository.delete(id);
    }
}