import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Cars extends Model {
  public id: number;
  public name: string;
  public marca: string;
  public value: number;
  public modelo: string;
  public foto: string;
}

Cars.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    marca: {
      type: STRING,
      allowNull: false,
    },
    value: {
      type: INTEGER,
      allowNull: false,
    },
    modelo: {
      type: STRING,
      allowNull: false,
    },
    foto: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    // underscored: true,
    sequelize: db,
    modelName: 'Cars',
    timestamps: false,
  }
);

export default Cars;
