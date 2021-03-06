package test

import org.specs2.mutable.Specification
import play.api.test.Helpers._
import play.api.test.{FakeRequest, FakeApplication}
import models.Accommodation

class AccommodationSpec extends Specification {

  "The Accommodation" should {
    "get all records" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {


        Accommodation.all.size must beGreaterThan(0)
      }
    }

    "findByID" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {

        val tuple = ("Testname",
          "http://image.url.com",
          Option("desc")
          )
        val acc = Accommodation.create(tuple)

        val accommodation = Accommodation.findById(acc.get.id)

        accommodation.get.imageUrl must beEqualTo("http://image.url.com")
      }
    }

    "findByName" in {
      running(FakeApplication(additionalConfiguration = inMemoryDatabase())) {

        val tuple = ("Testname",
          "http://image.url.com",
          Option("desc")
          )
        Accommodation.create(tuple)

        val accommodation = Accommodation.findByName("Testname")

        accommodation.get.imageUrl must beEqualTo("http://image.url.com")
      }
    }
  }

}