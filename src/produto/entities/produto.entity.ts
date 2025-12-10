import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @Column("decimal", {precision: 10, scale: 2})
    preco: number

    @Column({type: "int"})
    quantidadeEstoque: number

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, { onDelete: "CASCADE"})
    categoria: Categoria

    @Column({type: "int"})
    categoriaId: number
    
}