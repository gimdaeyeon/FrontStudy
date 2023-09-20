import Sequelize from "sequelize";

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          comment: "이메일",
        },
        password: {
          type: Sequelize.STRING(200),
          allowNull: false,
          comment: "비밀번호",
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "User",
        tableName: "users",
        charset:'utf8',
        collage:'utf8_general_ci',
      }
    );
  }
  static associate(db){
      // 관계설정
      // 1:N
      // db.User.hasMany(db.Post);
      // db.Post .belongTo(db.User);
      // 1:1
      // db.User.hasOne(db.Post);
      // db.Post.belongTo(db.User);
      // or
      // db.Post.belongTo(db.User);
      // N:M
      // db.Post.blongToMany(db.User, {through:'likes', as: '테이블 별칭', foreignKey:'컬럼명'})
      // db.User.blongToMany(db.Post, {through:'likes'})
      // 중간테이블 자동 생성
  }
}
