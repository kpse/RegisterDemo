package models

import play.api.db._
import anorm._
import anorm.SqlParser._
import play.api.Play.current

case class Accommodation(id: Long, name: String, desc: String, imageUrl: String)

object Accommodation {

  def findById(id: Long) = Accommodation.all.find {
    a => a.id == id
  }

  val simple = {
    get[Long]("id") ~
      get[String]("name") ~
      get[String]("desc") ~
      get[String]("imageUrl") map {
      case id ~ name ~ desc ~ imageUrl =>
        Accommodation(id, name, desc, imageUrl)
    }
  }


  def all(): List[Accommodation] = DB.withConnection {
    implicit c =>
      SQL("select * from accommodation").as(Accommodation.simple *)
  }

  def create(name: String, desc: String, imageUrl: String) = {
    DB.withConnection {
      implicit connection =>
        SQL("insert into accommodation(name, desc, imageUrl) values ({name}, {desc} {imageUrl})").on(
          'name -> name,
          'desc -> desc,
          'imageUrl -> imageUrl
        ).executeUpdate()
    }
  }


  def delete(id: Long) {}

}

