import sbt._
import Keys._
import play.Project._
import com.gu.SbtJasminePlugin._

object ApplicationBuild extends Build {

  val appName = "registerDemo"
  val appVersion = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm,
    "com.h2database" % "h2" % "1.3.168"
  )


  val main = play.Project(appName, appVersion, appDependencies)
    .settings(jasmineSettings: _*)
    .settings(// jasmine configuration overridden
    appJsDir <+= sourceDirectory {
      src => src  / ".." / "public" / "javascripts"
    },

    appJsLibDir <+= sourceDirectory {
      src => src  / ".." / "public" / "javascripts" / "vendor" / "angularjs"
    },

    jasmineTestDir <+= sourceDirectory {
      src => src / ".." / "test" / "assets"
    },

    jasmineConfFile <+= sourceDirectory {
      src => src / ".." / "test" / "assets" / "test.dependencies.js"
    },

    // link jasmine to the standard 'sbt test' action.
    // Now when running 'test' jasmine tests will be run
    // and after that other Play tests will be executed.
    (test in Test) <<= (test in Test)
  ) dependsOn (jasmine)

}
