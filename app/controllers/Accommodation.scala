package controllers

import play.api.mvc._
import models.Accommodation
import play.api.libs.json._

object Accommodations extends Controller {

  def show(id: Long) = Action {
    Accommodation.findById(id).map {
      acc =>
        implicit val writes = Json.writes[Accommodation]
        Ok(Json.toJson(acc)).as("application/json")
    }.getOrElse(NotFound)
  }

  def all = Action {
    implicit val writes = Json.writes[Accommodation]
    val jsons = Accommodation.all
    Ok(Json.toJson(jsons)).as("application/json")
  }
}
