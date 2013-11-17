import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "registerDemo"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm,
    "com.h2database" % "h2" % "1.3.168"
  )


  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here      
  )

}
